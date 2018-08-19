// App.js
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

import Header from "../components/Header";
import Content from "../components/Content";
import Aside from "../components/Aside";
import Footer from "../components/Footer";

import Contact from "../components/Contact";

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Header />
                <Content />
                <Contact />
                <Aside />                
                <Footer />                            
           </div>
         )
    } 

}

export default App;

// eof
