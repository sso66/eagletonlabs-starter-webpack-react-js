// Timeline.jsx
console.log("Mounting Timeline.jsx ... <Timeline />");

import React from "react";
import Content from '../../containers/EagletonEnd/Timeline/Content';

const Timeline = (props) => {
    return (
      <div>
        <h1 className="title is-5">Welcome Timeline!</h1>
        <Content />
      </div>  
    );
}

export default Timeline;

// eof

