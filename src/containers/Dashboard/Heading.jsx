// Heading.jsx
console.log("Mounting Heading.jsx... <Heading />");

import React from "react";

const Heading = (opts) => (
    <div className="hero is-primary">
        <h1 className="title is-4">{opts.title}</h1>
        <p className="">An algorithm is a set of instructions that specify exactly
        how to solve a particular problem in a finite number of steps.</p>
    </div>
);

export default Heading;

// eof
