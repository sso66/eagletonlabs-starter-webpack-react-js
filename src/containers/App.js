// App.js
console.info( 'Mounting App.js... <App />' );

import React from "react";
import { render } from "react-dom";
import NavBar from "../components/NavBar";

class App extends React.Component {

    render() {

        return (
           <div>
             <h2>Webpack Starter</h2>
             <h3>React Application Model</h3>
             <NavBar />
           </div>
         )
    }

}

export default App;

// eof
