// App.jsx
console.info( 'Mounting App.jsx... <App />' );

import React from "react";
import Header from "../components/Site/Header/Header";
import NavBar from "../components/Site/Nav/Navbar";

import Main from "../components/Site//Main";
import Footer from "../components/Site/Footer/Footer";
import '../utils/logger.es6';

class App extends React.Component {
    render() {       
        return (
            <section className="app">  
                <Header title="Eagleton End"/> 
                <NavBar />
                <Main />
                <Footer />   
            </section>       
         )
    } 
}

export default App;

// eof
