// App.js
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";

import Home from "../components/Home";

class App extends React.Component {

    render() {

        return (
            <div>  
                <Home />                             
           </div>
         )
    } 

}

export default App;

// eof
