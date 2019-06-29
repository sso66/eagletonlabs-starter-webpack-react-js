// App.jsx
console.info( 'Mounting App.jsx... <App />' );

import React from "react";

import Header from "../components/Site/Header/Header";
import Home from "../views/EagletonEnd/Home";
import Footer from "../components/Site/Footer/Footer";

//import activity from '../utils/activity.js';

class App extends React.Component {
    render() {       
        return (
            <div>  
                <Header title="Eagleton End"/> 
                <Home />
                <Footer />   
            </div>       
         )
    } 
}

export default App;

// eof
