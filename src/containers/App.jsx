// File: src/containers/App.jsx
// Desc: Mobile First RWD-SPA 
// Date: 9/14/2019
//..............................................................................
console.info( 'Mounting App.jsx... <App />' );

import React, { Component } from 'react';

import Header from "../components/Site/Header/Header";
import Navbar from "../components/Site/Nav/Navbar";
import Main from "../components/Site//Main";
import Footer from "../components/Site/Footer/Footer";
import '../styles/App.sass';

class App extends Component {
    render() {       
        const { store } = this.props;
        
        return (
            <div className="app">  
                <Main />            
            </div>       
         )
    } 
}

export default App;

// eof
