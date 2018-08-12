// App.js
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";
import NavBar from "../components/NavBar";

class App extends React.Component {

    render() {

        return (
           <div>
             <h1>Eagle Web Designs</h1>
             <h2>WebGL Progromming</h2>
           </div>
         )
    }

}

export default App;

// eof
