// Home.jsx
console.log("Mounting Home.jsx ... <Home />");

import React from "react";

import Heading from '../../containers/EagletonEnd/Home/Heading';
import Content from '../../containers/EagletonEnd/Home/Content';
import Tachometer from "../../containers/EagletonEnd/Home/Tachometer";

import RadialGauge from "../../components/Gauge/RadialGauge";

import AbstractGauge from "../../components/Gauge/AbstractGauge";

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
                        <div className="tile is-child gold post">
                            <h3>SVG and React: Part 1</h3>
                           
                               <RadialGauge />
                        
                            <Content />                 
                        </div>
                    </div>
                 
                    <div className="tile is-parent is-vertical">
                        <div className="tile is-child pink post">
                            <h3>SVG and React: Part 2</h3>
                            <Tachometer />
                                                     

                        </div>
                        
                        <div className="tile is-child blue">
                                                 
                         
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
                           <AbstractGauge />
                               
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

