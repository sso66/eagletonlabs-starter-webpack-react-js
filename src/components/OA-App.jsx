// App.jsx
console.info( 'Mounting App.jsx... <App />' );

import React from "react";

import Header from "../components/Site/Header/Header";
import Footer from "../components/Site/Footer/Footer";

import Home from "../views/OceanAlexander/Home";
//import Home from "../views/OceanAlexander/ACPower";
//import Home from "../views/OceanAlexander/ACMainBreakers";
//import Home from "../views/OceanAlexander/ACPowerSelect";
//import Home from "../views/OceanAlexander/BreakerPanels";
//import Home from "../views/OceanAlexander/DCPanel1";
//import Home from "../views/OceanAlexander/ACDCPower";
//import Home from "../views/OceanAlexander/PortShorePower";
//import Home from "../views/OceanAlexander/PortGenset";
//import Home from "../views/OceanAlexander/Lights";
//import Home from "../views/OceanAlexander/NavLights";
//import Home from "../views/OceanAlexander/Diagnostics";
import PortEngine from "../views/OceanAlexander/PortEngine";
import FuelTankLevel from "../views/OceanAlexander/FuelTankLevel";
//import Home from "../views/OceanAlexander/FreshWaterTankLevel";
//import Home from "../views/OceanAlexander/HeadSystem1";
//import Home from "../views/OceanAlexander/VesselStatus";
//import Home from "../views/OceanAlexander/Environment";
//import Home from "../views/OceanAlexander/Bilge";
//import Home from "../views/OceanAlexander/QuickStart";
//import Home from "../views/OceanAlexander/About";

class App extends React.Component {
   
    render() {            
        return (
            <div className="frame">  
                <div className="pane">  
                    <Header title="Ocean Alexander"/>  
                    <Home />    
                    <PortEngine />
                    <FuelTankLevel />
            
                </div>       
            </div>
         )
    } 
}

export default App;

// eof
