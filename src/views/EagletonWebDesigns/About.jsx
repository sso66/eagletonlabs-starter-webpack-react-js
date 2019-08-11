// src/views/EagletonWebDesigns/About.jsx
console.info( 'Mounting About.jsx... <About />' );

import React from "react";

import Layout from "../../components/Site/Layout/Layout";
import Solutions from "../../containers/Dashboard/Solutions";
import Concepts from "../../containers/Dashboard/Concepts";
import Practices from "../../containers/Dashboard/Practices";

const About = () => (
    <div className="about">
        <h2>About</h2>
        <h3>Understanding React, ReactDOM, React-Router + Redux + SVG + SASS + Node Design Principles, Participants & Patterns</h3>      
        <Layout 
            top={ <Solutions /> }
            left={ <Practices /> }
            center={ <Concepts /> } 
        />
    </div>
);
export default About;

// eof

