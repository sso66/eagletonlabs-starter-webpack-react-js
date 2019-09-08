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
        const { store } = this.props;
        
        return (
            <div className="">  
                <Main />            
            </div>       
         )
    } 
}

export default App;

// eof
