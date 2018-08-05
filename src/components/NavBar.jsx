// NavBar.jsx
console.log( "Mounting NavBar.jsx..." );

import React, { Component } from 'react';

const css = {
    mobile: {
        fontSize: '2.5em',
        color: 'rgba(255, 255, 225, 0.85)',
        border: '3px double #666',
        backgroundColor: 'violet',
        textAlign: 'right'
    },
    desktop: {
        fontSize: '5em',
        color: 'rgba(255, 255, 225, 0.85)',
        border: '3px double #666',
        backgroundColor: 'teal',
        textAlign: 'center',
        background: 'radial-gradient(red, teal)'
    },
};

const navbar =
    <div>
        <h3 style={css.desktop}>React Component: NavBar</h3>
        <div style={css.mobile}>
            Styled React Commponent
        </div>
    </div>;

class NavBar extends Component {

    render() {
        // hardcoded
        //return (<div><div>React Commponent</div></div>);
        return navbar;

    }

}

export default NavBar;

// eof
