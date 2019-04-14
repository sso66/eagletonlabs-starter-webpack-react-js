// FuelTankLevel.jsx
console.log("Mounting FuelTankLevel.jsx ... <FuelTankLevel />");

import React from "react";
import Heading from '../../containers/OceanAlexander/FuelTankLevel/Heading';
import Content from '../../containers/OceanAlexander/FuelTankLevel/Content';

const FuelTankLevel = (props) => {
    return (
        <div>
            <Heading />
            <div className="tile is-ancestor">
                <div className="tile is-3 is-vertical is-parent">
                    <div className="tile is-child">
                        <Content />
                    </div>
                </div>
             
                <div className="tile is-6 is-vertical is-parent">
                    <div className="tile is-child pink post">
                        <Heading />
                    </div>
                    <div className="tile is-child gold post">
                         <Heading />
                    </div>                   
                </div> 
             
                <div className="tile is-3 is-parent">
                    <div className="tile is-child blue post">
                         <Content />
                    </div>
                </div>
            </div>        
        </div>  
    );
}

export default FuelTankLevel;

// eof

