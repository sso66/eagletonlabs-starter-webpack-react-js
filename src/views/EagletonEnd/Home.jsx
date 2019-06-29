// Home.jsx
console.log("Mounting Home.jsx ... <Home />");

import React from "react";
import Concepts from '../../containers/Home/Concepts';
import Heading from '../../containers/Home/Heading';
import Practices from '../../containers/Home/Practices';

const Home = (props) => {
    return (
        <div>   
            <Heading title="Home"/>
                  
            <section className="section">
                <div className="container">               
                    <div className="columns">  
                     
                        <div className="column">
                            <h2 className="title is-4">Concepts</h2>
                            <Concepts />            
                        </div>
                     
                         <div className="column">
                            <h2 className="title is-4">Practices</h2>
                            <Practices />
                        </div>
                    </div>     
                </div>
            </section>    
        </div>
    );
}

export default Home;

// eof

