// src/containers/App.jsx
console.info( 'Mounting App.jsx... <App />' );

import React, { Component } from 'react';

import Index from "../containers/Index";
import Header from "../components/Site/Header/Header";
import Navbar from "../components/Site/Nav/Navbar";
import Main from "../components/Site//Main";
import Footer from "../components/Site/Footer/Footer";
import '../styles/App.sass';


class App extends Component {
    render() {       
        return (
            <div className="app">  
                <Index />
                <Header title="The End Point" /> 
                <Main />
                <Footer />                 
            </div>       
         )
    } 
}

export default App;

// eof
