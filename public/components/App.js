// App.js
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

import Header from "../components/Header";
import Main from "../components/Main";
import Aside from "../components/Aside";
import Footer from "../components/Footer";

class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Header />
                <Main />
                <Aside />                
                <Footer />                            
           </div>
         )
    } 

}

export default App;

// eof
