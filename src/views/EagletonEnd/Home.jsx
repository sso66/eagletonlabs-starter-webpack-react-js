// Home.jsx
console.log("Mounting Home.jsx ... <Home />");

import React from "react";
import Heading from '../../containers/EagletonEnd/Home/Heading';
import Content from '../../containers/EagletonEnd/Home/Content';

const Home = (props) => {
    return (
      <div>
         <Heading>
            <h1 className="title is-5">Welcome Home!</h1>
        </Heading>
        <section className="section">
            <div className="container">
                <Content />
            </div>
        </section>

      </div>  
    );
}

export default Home;

// eof

