// PortEngine.jsx
console.log("Mounting PortEngine.jsx ... <PortEngine />");

import React from "react";
import Heading from '../../containers/OceanAlexander/PortEngine/Heading';
import Content from '../../containers/OceanAlexander/PortEngine/Content';

const PortEngine = (props) => {
    return (
        <div>
            <Heading />
            <div className="section">
            <div className="container">
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
            </div>  
        </div>  
    );
}

export default PortEngine;

// eof

