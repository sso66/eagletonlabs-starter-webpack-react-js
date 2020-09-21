// File: src/containers/App.jsx
// Desc: Mobile First RWD-SPA 
// Date: 9/14/2019
//..............................................................................
console.info( 'Mounting src/containers/App.jsx... <App />' );

import React, { Component } from 'react';
import Header from "../containers/Site/Header/Header";
import Navbar from "../containers/Site/Nav/Navbar";
import Main from "../containers/Site/Main";
import Aside from '../containers/Site/Aside/Aside'
import Footer from "../containers/Site/Footer/Footer";
import './App.sass';

class App extends Component {
    render() {              
        return (
            <div className="App">  
                <Header />
                <Navbar />
                <Main /> 
                <Aside />
                <Footer />
            </div>       
         )
    } 
}

export default App;

// eof
