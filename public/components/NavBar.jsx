// NavBar.jsx
console.log( "Mounting NavBar.jsx..." );

import React, { Component } from 'react';

const CSSBoxModel = {
    mobile: {
        backgroundColor: '#191970',        
        border: '3px double #666',
        fontSize: '2.5em',
        color: 'rgba(255, 255, 225, 0.85)',
        textAlign: 'right',
    },
    desktop: {
        background: 'radial-gradient(skyblue, teal)',
        border: '3px double #666',
        fontSize: '5em',
        color: 'rgba(255, 255, 225, 0.85)',
        textAlign: 'center',
    },
};

const navbar =
    <div>
        <h2 style={CSSBoxModel.desktop}>JS Style Prototype Object: React Component - NavBar</h2>
        <h3 style={CSSBoxModel.mobile}>
            React + Styled Commponent NPM with ES6 `backtick`
        </h3>
        <p style={CSSBoxModel.mobile}>https://www.styled-components.com/docs/</p>
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
