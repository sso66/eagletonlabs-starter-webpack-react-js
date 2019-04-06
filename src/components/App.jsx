// App.jsx
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

import Header from "../components/Site/Header";
import Content from "../components/Site/Content";
import Footer from "../components/Site/Footer";

import Timeline from "../components/Timeline/Timeline";

class App extends React.Component {
    render() {       
        return (
            <div className="app">    
                <Header />
                <Content />
                <Timeline />
                <Footer />          
            </div>
         )
    } 
}

export default App;

// eof
