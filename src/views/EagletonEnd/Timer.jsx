// Timer.jsx
console.log("Mounting Timer.jsx ... <Timer />");

import React from "react";
import Content from '../../containers/EagletonEnd/Timer/Content';

const Timer = (props) => {
    return (
      <div>
        <h1 className="title is-5">Welcome Timer!</h1>
        <Content />
      </div>  
    );
}

export default Timer;

// eof

