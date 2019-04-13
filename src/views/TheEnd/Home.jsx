// Home.jsx
console.log("Mounting Home.jsx ... <Home />");

import React from "react";
//import Content from '../../containers/Timeline/Content';
import Content from '../../components/Timeline/Content';

const Home = (props) => {
    return (
      <div>
        <h1 className="title is-5">Welcome Home!</h1>
        <Content />
      </div>  
    );
}

export default Home;

// eof

