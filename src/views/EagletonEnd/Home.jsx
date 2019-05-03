// Home.jsx
console.log("Mounting Home.jsx ... <Home />");

import React from "react";

import Heading from '../../containers/EagletonEnd/Home/Heading';
import Content from '../../containers/EagletonEnd/Home/Content';
import N2KGauge from "../../containers/EagletonEnd/Gauge/N2KGauge";

import RadialGauge from "../../components/Gauge/RadialGauge";

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
                        <div className="tile is-parent">
                            <div className="tile is-child green post">
                                <Content />                 
                            </div>
                        </div>
                     
                        <div className="tile is-6 is-vertical is-parent">
                            <div className="tile is-child pink post">
                                <h3>SVG and React: Part 2</h3>
                                <N2KGauge />
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
                     
                        <div className="tile is-parent">
                            <div className="tile is-child post green">
                                <h3>SVG and React: Part 1</h3>
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

