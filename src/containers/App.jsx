// App.jsx
console.info( 'Mounting App.jsx... <App />' );

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from "../components/Site/Header/Header";
import Navbar from "../components/Site/Nav/Navbar";
import Main from "../components/Site//Main";
import Footer from "../components/Site/Footer/Footer";
import '../styles/App.sass';
import '../utils/logger.es6';
import '../redux/traffic-light';

class App extends Component {
    render() {       
        const {currentUser} = this.props;
        
        return (
            <section className="app">  
                <Header title="Eagleton End"/> 
                <Navbar currentUser={""} />
                <div className="page">
                     currentUser props
                    {this.props.children}
                </div>
                <Main />
                <Footer />                 
            </section>       
         )
    } 
}

export default App;

// eof
