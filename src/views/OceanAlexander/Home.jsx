// Home.jsx
console.log("Mounting Home.jsx ... <Home />");

import React from "react";
import Heading from '../../containers/OceanAlexander/Home/Heading';
import Content from '../../containers/OceanAlexander/Home/Content';

const Home = (props) => {
    return (
        <div>
            <Heading />
            <div className="section">
            <div className="container">
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child">
                        <Content />
                    </div>
                </div>
             
                <div className="tile is-parent">
                    <div className="tile is-child is-6 pink post">
                        <Heading />
                    </div>
                    <div className="tile is-child gold post">
                         <Heading />
                    </div>                   
                </div> 
             
                <div className="tile is-parent gold post">
                    
                         <Content />
                    
                </div>
            </div>   
            </div>
            </div>     
        </div>  
    );
}

export default Home;

// eof

