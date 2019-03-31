// App.jsx
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

import Header from "../components/Site/Header";
import Main from "../components/Site/Main";
import Footer from "../components/Site/Footer";

class App extends React.Component {
    render() {       
        return (
            <div className="app">    
                <Header />
                <Main />
                <Footer />                            
            </div>
         )
    } 
}

export default App;

// eof
