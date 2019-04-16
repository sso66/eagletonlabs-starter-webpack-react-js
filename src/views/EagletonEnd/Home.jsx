// Home.jsx
console.log("Mounting Home.jsx ... <Home />");

import React from "react";
import Heading from '../../containers/EagletonEnd/Home/Heading';
import Content from '../../containers/EagletonEnd/Home/Content';


const Home = (props) => {
     return (
        <div>
            <Heading />
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="tile is-child green post">
                        <Content />                 
                    </div>
                </div>
             
                <div className="tile is-6 is-vertical is-parent">
                    <div className="tile is-child pink post">
                        <Content />
                    </div>
                    <div className="tile is-child gold post">
                         <Content />
                    </div>
                </div> 
             
                <div className="tile is-parent">
                    <div className="tile is-child blue post">
                         <Content />
                    </div>
                </div>
            </div>        
        </div>  
    );
}

export default Home;

// eof

