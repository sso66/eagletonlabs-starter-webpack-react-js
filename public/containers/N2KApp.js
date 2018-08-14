// N2KApp.js
console.info( 'Mounting N2KApp.js... <N2KApp />' );

import React from "react";
import { render } from "react-dom";
import NavBar from "../components/NavBar";

class N2KApp extends React.Component {

    render() {

        return (
           <div>
             <h1>Eagleton Web Designs & OctoPlex Production</h1>
             <h2>Final Take on 3D Realtime Interactive WebGL Applications</h2>
           </div>
         )
    } 

}

export default N2KApp;

// eof
