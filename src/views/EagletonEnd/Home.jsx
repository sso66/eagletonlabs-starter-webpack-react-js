// Home.jsx
console.log("Mounting Home.jsx ... <Home />");

import React from "react";

import Heading from '../../containers/EagletonEnd/Home/Heading';
import Content from '../../containers/EagletonEnd/Home/Content';
import Tachometer from "../../containers/EagletonEnd/Home/Tachometer";

import RadialGauge from "../../components/Gauge/RadialGauge";
import AbstractGauge from "../../components/Gauge/AbstractGauge";
import N2KProduct from "../../components/Gauge/N2KProduct";
import N2KBarGraph from "../../components/Gauge/N2KBarGraph";

//import Animation from "../../components/Animation/Animation";
import Timeline from "../../components/Timeline/Timeline";
import HelloWorld from "../../components/User/HelloWorld";
import ListItem from "../../components/User/ListItem";
import Notification from "../../components/User/Notification";

const Home = (props) => {
     return (
        <div>
            <Heading />
            
            <section className="section">
                <div className="container">               
                <div className="tile is-ancestor">                   
                    <div className="tile is-parent is-vertical is-6">
                        <div className="tile is-child gold post">
                            <N2KBarGraph width="100" />
                            <N2KProduct width="150" /> 
                            <N2KBarGraph width="100" />
                            <Content />                 
                        </div>
                    </div>
                 
                    <div className="tile is-parent is-vertical">
                        <div className="tile is-child pink post">
                            <h3>SVG and React: Part 2</h3>
                            <Tachometer />
                        </div>
                        
                        <div className="tile is-child blue">
                            <h3>N2K Product</h3>
                            <N2KProduct width="250" />
                        </div>
                        
                        <div className="tile is-child gold ">
                            <HelloWorld name="Stephen" />
                            <hr />
                            <ListItem>
                                <HelloWorld name="Stephen" />
                            </ListItem>
                            <hr />
                            <Notification message="Notify Me" level="3"/>     
                        </div>
                    </div> 
                 
                    <div className="tile is-parent is-vertical">                       
                        <div className="tile is-child post green">
                            <h3>SVG and React: Part 1</h3>
                            <AbstractGauge /> 
                            <hr />
                            <RadialGauge />
                       </div>
                    </div>
                </div>     
            </div>
        </section>    
        <Timeline />
    </div>
    );
}

export default Home;

// eof

