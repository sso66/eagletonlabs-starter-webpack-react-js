// File: src/containers/App.jsx
// Desc: Mobile First RWD-SPA 
// Date: 9/14/2019
//..............................................................................
console.info( 'Mounting src/containers/App.jsx... <App />' );

import React, { Component } from 'react';
import Header from "../components/Site/Header/Header";
import Navbar from "../components/Site/Nav/Navbar";
import Main from "../components/Site//Main";
import Aside from '../components/Site/Aside/Aside'
import Footer from "../components/Site/Footer/Footer";
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
