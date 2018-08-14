// App.js
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

import NavBar from "../components/NavBar";
import Content from "../components/Content";

class App extends React.Component {

    render() {

        return (
            <div>  
                <NavBar />                             
                <Content />
           </div>
         )
    } 

}

export default App;

// eof
