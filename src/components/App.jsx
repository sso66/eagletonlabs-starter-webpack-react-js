// App.jsx
console.info( 'Mounting App.jsx... <App />' );

import React from "react";

import Header from "../components/Site/Header/Header";
import Footer from "../components/Site/Footer/Footer";
import SvgResponsive from "../components/Gauge/SvgResponsive";

// class App extends React.Component {
    // render() {       
        // return (
            // <div className="hero is-primary">  
                // <Header title="Eagleton Endpoint" />    
                // <SvgResponsive 
                    // fill="blue" 
                    // stroke="red" 
                    // opacity="1" 
                    // radius="150" />
                // <Footer />   
            // </div>       
         // )
    // } 
// }

const App = () => {  
    return (
        <div className="hero is-primary">  
            <Header title="Eagleton Endpoint" />    
            <SvgResponsive 
                fill="blue" 
                stroke="red" 
                opacity="1" 
                radius="150" />
            <Footer />   
        </div>       
     )
}

export default App;

// eof
