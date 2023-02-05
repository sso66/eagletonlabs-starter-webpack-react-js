// File: src/components/App/App.jsx
// Date: 9/14/2019
// Note: Mobile First RWD-SPA 
//..............................................................................
console.info( 'Mounting src/components/App/App.jsx... <App />' );

import React, { Component } from 'react';
// import Header from "../../components/Site/Header/Header";
// import Navigation from "../../components/Site/Nav/Navigation";
import Main from "../../components/Site/Main";
// import Aside from '../../components/Site/Aside/Aside'
// import Footer from "../../components/Site/Footer/Footer";
import './App.sass';

const App = () => {
// function App() {
// class App extends Component {
    // render() {              
        return (
            <div className="App">  
                {/* <Header /> */}
                {/* <Navigation /> */}
                <Main /> 
                {/* <Aside /> */}
                {/* <Footer /> */}
            </div>       
         )
    // } 
// }
}

export default App;

// eof